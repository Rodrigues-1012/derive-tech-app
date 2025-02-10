

import { create } from 'zustand'

export const HeaderContext = create((set) => ({
  header: null,
  setHeader: (data) => set({header : data}),
}))


export const TestimonialContext = create((set) => ({
  list : [],
  data: null,
  setList : (data) => set({list : data}),
  setTestimonial: (data) => set({data}),
}))


export const PartnersContext = create((set) => ({
  list : [],
  data: null,
  setList : (data) => set({list : data}),
  setPartner: (data) => set({data}),
}))


export const VerticalContext = create((set) => ({
  list : [],
  setList : (data) => set({list : data}),
}))

export const SolutionBriefContext = create((set) => ({
  list : null,
  data : null,
  setList : (data) => set({list : data}),
  setData : (data) => set({data}),
}))




