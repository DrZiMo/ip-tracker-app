import { create } from "zustand";

interface IIpInfoProp {
    ip: string
    isp: string
    location: ILocationProp
}

interface ILocationProp {
    city: string
    country: string
    geonameId: number
    lat: number
    lng: number
    postalCode: string
    region: string
    timezone: string
}

type IPInfoType = {
    ipInfoData: IIpInfoProp,
    newLocation: (data: IIpInfoProp) => void
}

export const useIpInfo = create<IPInfoType>((set) => ({
    ipInfoData: {} as IIpInfoProp,
    newLocation: (data: IIpInfoProp) => set(() => ({ ipInfoData: data }))
}))