export default function auth({ next, router }) {
    console.log('pinda');
    if (!localStorage.getItem('token')) {
        return router.push({ name: 'Login' });
    }

    return next();
}