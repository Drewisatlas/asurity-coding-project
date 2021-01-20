export interface Contact {
id: number,
firstName: string,
lastName: string,
email: string,
phoneNumber: string,
streetAddress: string,
city: string,
state: string,
zipcode: string,
contactFrequency: number,
contactMethod: number
}

export interface NewContact {
firstName: string,
lastName: string,
email: string,
phoneNumber: string,
streetAddress: string,
city: string,
state: string,
zipcode: string,
contactFrequency: number,
contactMethod: number
}

export interface UsState {
  id: number,
  fullName: string,
  abbreviation: string
}

export interface ContactMethod {
  id: number,
  method: string
}

export interface ContactFrequency {
  id: number,
  frequency: string
}