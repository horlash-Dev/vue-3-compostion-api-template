export const useLoad = (loader, loaderInit) => {
  const load = loader.show({
    container: loaderInit,
    width: 30,
    height: 30,
    opacity: 1,
  });

  setTimeout(() => {
    //loaderInit.value = false
    load.hide();
    loaderInit = !loaderInit;
  }, 500);
};
