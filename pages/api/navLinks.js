export const data = [
    {
        label: 'Home',
        content: [
            {href: ''}
        ],
        type: 'nav link'
    },
    {
        label: 'about',
        content : [
            {href: '/about_us', name: 'About Us'},
            {href: '/founder', name: 'Founder'},
            {href: '/our_team', name: 'Our Team'},
        ], 
        type: 'dropdown button' 
    },
    {
        label: 'Activities',
        content : [
            {href: '/sports', name: 'sports'},
            {href: '/office_on_the_go', name: 'office on the go'},
            {href: '/brain_gym ', name: 'brain gym'},
            {href: '/tec_hub', name: 'tec hub'},
            {href: '/digital_specialized_training', name: 'digital_specialized_training'},
            {href: '/events', name: 'events'},
        ],
        type: 'dropdown button'
    },
    {
        label: 'contact',
        content: [
            {href: 'contact'}
        ],
        type: 'nav link'
    },
    {
        label: 'Events',
        content: [
            {href: 'tac_events'}
        ],
        type: 'button',
        details: {variant: 'outline-primary'}
    }

];