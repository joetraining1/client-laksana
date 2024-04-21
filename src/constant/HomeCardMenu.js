import { AccountBoxRounded, AddCardRounded, AssignmentTurnedIn, PeopleOutlineRounded } from "@mui/icons-material";
import { CardMenuIconStyle } from "./Styles";

export const HomeCardMenus = [
    {
        id: 'profile',
        to: 'profile',
        title: 'Profile',
        icon: AccountBoxRounded,
    },
    {
        id: 'absensi',
        to: 'absensi',
        title: 'Absensi',
        icon: AssignmentTurnedIn,
    },
    {
        id: 'gaji',
        to: 'gaji',
        title: 'Gaji',
        icon: AddCardRounded,
    },
    {
        id: 'keluarga',
        to: 'keluarga',
        title: 'Keluarga',
        icon: PeopleOutlineRounded,
    },
]