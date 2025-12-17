export const APP_ROUTES = {
    root: (path: string = "") => path,
    home: () => APP_ROUTES.root('/'),
    about: () => APP_ROUTES.root("/about"),
    service: () => APP_ROUTES.root("/service"),
    review: () => APP_ROUTES.root("/review"),
    photo: () => APP_ROUTES.root("/photo"),
    posts:{
        index:() => APP_ROUTES.root('/posts'),
        show: (id: string) => APP_ROUTES.root('/posts/' + id),
    },


};