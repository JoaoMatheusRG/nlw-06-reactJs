import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type Buttonprops = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutline?: boolean
}

export function Button({ isOutline = false, ...props }: Buttonprops) {

    return(
        <button 
            className={`button ${isOutline ? 'outlined' : ''}`} 
            {...props} 
        />
    );
}
