import { Pack, Cycle, Trait, CardWithVersions } from '@5rdb/api'
import { createContext, ReactNode, useEffect, useState, useContext } from 'react'
import { publicApi } from '../api'

export interface UiStore {
  cards: CardWithVersions[]
  packs: Pack[]
  cycles: Cycle[]
  traits: Trait[]
}

export const UiStoreContext = createContext<UiStore>({
  cards: [],
  packs: [],
  cycles: [],
  traits: [],
})

export function UiStoreProvider(props: { children: ReactNode }): JSX.Element {
  const [cards, setCards] = useState<CardWithVersions[]>([])
  const [packs, setPacks] = useState<Pack[]>([])
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [traits, setTraits] = useState<Trait[]>([])

  useEffect(() => {
    publicApi.Pack.findAll().then((packs) => setPacks(packs.data()))
    publicApi.Card.findAll().then((cards) => setCards(cards.data()))
    publicApi.Cycle.findAll().then((cycles) => setCycles(cycles.data()))
    publicApi.Trait.findAll().then((traits) => setTraits(traits.data()))
  }, [])

  return (
    <UiStoreContext.Provider
      value={{
        cards: cards,
        packs: packs,
        cycles: cycles,
        traits: traits,
      }}
    >
      {props.children}
    </UiStoreContext.Provider>
  )
}

export function useUiStore(): UiStore {
  const uiStore = useContext(UiStoreContext)
  if (uiStore === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return uiStore
}
