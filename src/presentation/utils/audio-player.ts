/**
 * Audio Player for Pokemon Cries
 * Attempts to play real PokeAPI official cry audio,
 * and seamlessly falls back to Web Audio API synthesizer cry if offline/blocked.
 */
export class PokemonAudioService {
  private static currentAudio: HTMLAudioElement | null = null;
  private static audioCtx: AudioContext | null = null;

  static async playCry(cryUrl: string, pokemonId: number): Promise<void> {
    try {
      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      }

      const audio = new Audio(cryUrl);
      audio.volume = 0.6;
      this.currentAudio = audio;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
    } catch {
      // Fallback: Synthesize nostalgic 8-bit chip tune cry
      this.synthesizeCry(pokemonId);
    }
  }

  /**
   * Generates retro 8-bit Pokemon cry sound using Web Audio API
   */
  static synthesizeCry(pokemonId: number): void {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!this.audioCtx) {
        this.audioCtx = new AudioContextClass();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const ctx = this.audioCtx;
      const now = ctx.currentTime;

      // Base frequency determined deterministically by Pokemon ID
      const baseFreq = 220 + (pokemonId % 40) * 18;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = pokemonId % 2 === 0 ? 'square' : 'sawtooth';
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.8, now + 0.1);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.6, now + 0.35);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch {
      // Silently handle if audio context is blocked
    }
  }
}
