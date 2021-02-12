import { useState, useEffect } from 'react';
import liff from '@line/liff';

const useInitial = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        liff
            .init({ liffId: '1655665542-QEDV0349' })
            .then(() => {
                if (!liff.isLoggedIn()) {
                    liff.login()
                }
                else {
                    setIsLoggedIn(liff.isLoggedIn());
                }
            });
    }, []);

    return {
        isLoggedIn
    };
};

export {
    useInitial,
}
