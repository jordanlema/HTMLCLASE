import { createContext, useReducer, type ReactNode } from 'react';
import type { Inscripcion, Participante } from '../models/inscripciones.model';
import type { Dispatch } from 'react';
import data from '../data/inscripciones_db.json';

interface InscripcionState {
  participante?: Participante;
  inscripcion?: Inscripcion;
  participantes: Participante[];
  inscripciones: Inscripcion[];
}

type InscripcionAction = 
  | { type: 'SET_PARTICIPANTE_INFO'; payload: Participante }
  | { type: 'SET_INSCRIPCION'; payload: Inscripcion };

function inscripcionReducer(state: InscripcionState, action: InscripcionAction): InscripcionState {
  switch (action.type) {
    case 'SET_PARTICIPANTE_INFO':
      return {
        ...state,
        participante: action.payload,
        participantes: [...state.participantes, action.payload]
      };
    case 'SET_INSCRIPCION':
      return {
        ...state,
        inscripcion: action.payload,
        inscripciones: [...state.inscripciones, action.payload]
      };
    default:
      return state;
  }
}

const initialState: InscripcionState = {
  participantes: data.participantes,
  inscripciones: data.inscripciones
};

const InscripcionContext = createContext<{ state: InscripcionState; dispatch: Dispatch<InscripcionAction> } | undefined>(undefined);

export const InscripcionProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(inscripcionReducer, initialState);
  return (
    <InscripcionContext.Provider value={{ state, dispatch }}>
      {children}
    </InscripcionContext.Provider>
  );
};

export default InscripcionContext;