import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { supabase } from '../../../utils/supabaseClient';

export default function AuthRedirect() {
    const [session, setSession] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await supabase.auth.getSession();
                setSession(data.session);
            } catch (error) {
                console.error('Error fetching session:', error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (session) {
            if (session.user) {
                navigate('/');
            } else {
                navigate('/userSetting');
            }
        }
    }, [session, navigate]);

    return null;
}