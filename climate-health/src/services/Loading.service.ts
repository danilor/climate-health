const LoadingID = '_loading';

const checkLoading = () => {
    if (!document.getElementById(LoadingID)) {


        const loading = document.createElement('div');
        loading.id = LoadingID;
        loading.style.position = 'fixed';
        loading.style.width = '100vw';
        loading.style.height = '100vh';
        loading.style.top = '0';
        loading.style.left = '0';
        loading.style.backgroundColor = 'rgba(0,0,0,0.5)';
        loading.style.display = 'none';
        loading.style.justifyContent = 'center';
        loading.style.alignItems = 'center';
        loading.style.overflow = 'hidden';
        loading.style.zIndex = '9999';


        document.body.append(loading);

        document.getElementById(LoadingID)!.innerHTML = '<div class="lds-facebook"><div></div><div></div><div></div></div>';
    }
}

const LoadingService = {
    show: () => {
        checkLoading();
        // @ts-ignore
        document.getElementById(LoadingID).style.display = 'flex';
    },
    hide: () => {
        checkLoading();
        // @ts-ignore
        document.getElementById(LoadingID).style.display = 'none';
    },

    check: () => {

    }
}

export default LoadingService;