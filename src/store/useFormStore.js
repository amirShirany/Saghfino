import { create } from "zustand"

// Data for page 1
export const usePage1Store = create((set) => ({
  page1Data: JSON.parse(localStorage.getItem("page1Data")) || {
    city: "",
    region: "",
    mainstreet: "",
    sidestreet: "",
  },
  setPage1Data: (data) => {
    set((state) => {
      const newState = { ...state.page1Data, ...data }
      localStorage.setItem("page1Data", JSON.stringify(newState))
      return { page1Data: newState }
    })
  },
}))

// Data for page 2
export const usePage2Store = create((set) => ({
  page2Data: JSON.parse(localStorage.getItem("page2Data")) || {
    transactiontype: "",
    propertytype: "",
    mortgage: "",
    rent: "",
    Convertible: false,
  },
  setPage2Data: (data) => {
    set((state) => {
      const newState = { ...state.page2Data, ...data }
      localStorage.setItem("page2Data", JSON.stringify(newState))
      return { page2Data: newState }
    })
  },
}))

// Data for page 3
export const usePage3Store = create((set) => ({
  page3Data: JSON.parse(localStorage.getItem("page3Data")) || {
    area: "",
    room: "",
    floor: "",
    numfloors: "",
  },
  setPage3Data: (data) => {
    set((state) => {
      const newState = { ...state.page3Data, ...data }
      localStorage.setItem("page3Data", JSON.stringify(newState))
      return { page3Data: newState }
    })
  },
}))
