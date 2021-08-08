import create, {SetState, GetState} from 'zustand';

export type State = {
    movies: []
    setMovies: (data: []) => void
}

export const useStore = create<State>((set: SetState<State>, get: GetState<State>) => ({
  movies: [],
  setMovies: (data: []) => {
    set({movies: data})
  }
}))

