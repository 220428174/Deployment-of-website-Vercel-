import { faker } from '@faker-js/faker';

const art2 = [
    {
        avatar: faker.image.city(125, 234) ,
        name:faker.name.firstName(),
        position: faker.name.jobTitle(),
        desc: faker.name.jobDescriptor()
    },
    {
        avatar: faker.image.city(126, 234) ,
        name:faker.name.firstName(),
        position: faker.name.jobTitle(),
        desc: faker.name.jobType()
    }, 
    {
        avatar: faker.image.city(127, 234) ,
        name:faker.name.firstName(),
        position: faker.name.jobTitle(),
        desc:faker.name.jobType()
    },
    {
        avatar: faker.image.city(128, 234) ,
        name: faker.name.firstName(),
        position: faker.name.jobTitle(),
        desc:faker.name.jobType()
    },
    {
        avatar: faker.image.city(129, 234) ,
        name:faker.name.firstName(),
        position: faker.name.jobTitle(),
        desc:faker.name.jobType()
    }, 
    
]

export default art2;