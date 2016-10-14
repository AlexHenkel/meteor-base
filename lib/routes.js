/* Add your routes here. (Optimized for FlowRouter) */
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Home' });
    }
});