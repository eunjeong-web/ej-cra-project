import React from 'react';

const Commontitle = ({cls, t, p}) => {
    return ( 
        <section className={cls}>
            <h2>
                {t}
            </h2>
            <p>{p}</p>
        </section>
    );
};

export default Commontitle;