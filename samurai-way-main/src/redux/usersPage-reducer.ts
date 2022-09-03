import {ActionType} from './store';

export type UsersType = {
    id: number;
    followed: boolean;
    name: string;
    status: string | null;
    photos: {
        large: string | undefined;
        small: string | undefined;
    };
    uniqueUrlName: null | string;
};

export type InitialStateType = typeof initialState;

let initialState = {
    users: [] as Array<UsersType>,
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
};

export const usersPageReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map((u) => (u.id === action.userID ? {...u, followed: true} : u))};
        case 'UNFOLLOW':
            return {...state, users: state.users.map((u) => (u.id === action.userID ? {...u, followed: false} : u))};
        case 'SET-USERS':
            return {...state, users: action.users};
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage};
        case 'SET-TOTAL-COUNT':
            return {...state, totalCount: action.totalCount};
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching};
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state, followingInProgress:
                    action.disabledButton
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export const followUsers = (userID: number) =>
    ({
        type: 'FOLLOW',
        userID: userID,
    } as const);

export const unfollowUsers = (userID: number) =>
    ({
        type: 'UNFOLLOW',
        userID: userID,
    } as const);

export const setUsers = (users: Array<UsersType>) =>
    ({
        type: 'SET-USERS',
        users: users,
    } as const);

export const setCurrentPage = (currentPage: number) =>
    ({
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage,
    } as const);

export const setTotalCount = (totalCount: number) =>
    ({
        type: 'SET-TOTAL-COUNT',
        totalCount: totalCount,
    } as const);

export const toggleIsFetching = (isFetching: boolean) =>
    ({
        type: 'TOGGLE-IS-FETCHING',
        isFetching: isFetching,
    } as const);

export const toggleIsFollowingProgress = (disabledButton: boolean, userId: number) =>
    ({
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        disabledButton: disabledButton,
        userId: userId
    } as const);
