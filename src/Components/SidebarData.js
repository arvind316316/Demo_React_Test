import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React from "react"
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import '../App.css';

export const SidebarData = [
    {
        title:"system",
        icon:<SettingsSuggestIcon />,
        link:"/system"
    },
    {
        title:"branding",
        icon:<BrandingWatermarkIcon />,
        link:"/branding"
    }

];