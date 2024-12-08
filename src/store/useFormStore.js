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
    localStorage.setItem("page1Data", JSON.stringify(data))
    set({ page1Data: data })
  },
  // تابع برای تنظیم مجدد مقادیر
  resetpage1Data: () =>
    set({
      page1Data: { city: "", region: "", mainstreet: "", sidestreet: "" },
    }),
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
    localStorage.setItem("page2Data", JSON.stringify(data))
    set({ page2Data: data })
  },
  // تابع برای تنظیم مجدد مقادیر
  resetpage2Data: () =>
    set({
      page2Data: {
        transactiontype: "",
        propertytype: "",
        mortgage: "",
        rent: "",
        Convertible: false,
      },
    }),
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
    localStorage.setItem("page3Data", JSON.stringify(data))
    set({ page3Data: data })
  },
  // تابع برای تنظیم مجدد مقادیر
  resetpage3Data: () =>
    set({
      page3Data: {
        transactiontype: "",
        propertytype: "",
        mortgage: "",
        rent: "",
        Convertible: false,
      },
    }),
}))
