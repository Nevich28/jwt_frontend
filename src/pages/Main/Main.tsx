import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { getProfile } from '../../api/auth';
import { IRootState, useAppDispatch } from '../../store';
import {
    logoutUser,
    getProfile,
} from '../../store/auth/actionCreators';
import Login from './components/Login';

const RenderProfile = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    };
    const profile = useSelector(
        (state: IRootState) => state.auth.profileData.profile,
    );
    return (
        <div>
            <div>Вы успушно авторизовались, {profile}</div>
            <button onClick={onLogout}>Logout</button>
            <button onClick={() => dispatch(getProfile())}>
                update profile
            </button>
        </div>
    );
};

const Main = () => {
    // const dispatch = useAppDispatch();
    const isLoggedIn = useSelector(
        (state: IRootState) => !!state.auth.authData.accessToken,
    );

    return (
        <div>
            <h1>Main</h1>
            {isLoggedIn ? <RenderProfile /> : <Login />}
            {/* <Login /> */}
        </div>
    );
};
export default Main;
