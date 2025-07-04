import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-[30px] h-[30px] border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;
