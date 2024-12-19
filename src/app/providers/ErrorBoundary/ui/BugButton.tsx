import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

export const BugButton = () => {
    const [error, setError] = useState<boolean>(false);

    const throwError = () => {
        setError(true);
    };
    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <div>
            <Button onClick={throwError}>Error</Button>
        </div>
    );
};
