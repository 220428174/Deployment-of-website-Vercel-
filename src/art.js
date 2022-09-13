import { faker } from '@faker-js/faker';

const art = [
    {
        avatar: faker.image.city(120, 234) ,
        name:" Topic 1 - Start",
        position: "Where it started",
        desc:" This topic is in relation as to why I education is important.",
        star: "Rating: ֍֍֍"
    },
    {
        avatar: faker.image.city(122, 234) ,
        name:" Topic 2 - Steps",
        position: "Deakin University",
        desc:" This topic is in relation as to what subjects I have undertaken.",
        star: "Rating: ֍֍֍֍"
    }, 
    {
        avatar: faker.image.city(123, 234) ,
        name:"Topic 3 - Games",
        position: "Video games are fun",
        desc:" This topic is in relation to why video games are fun.",
        star: "Rating: ֍֍֍֍֍"
    },
    {
        avatar: faker.image.city(124, 234) ,
        name: " Topic 4 - Developement",
        position: "Self-development is crucial",
        desc:" This topic is in relation as to why it is important to take time for yourself.",
        star: "Rating: ֍֍֍"
    }, 
]

export default art;