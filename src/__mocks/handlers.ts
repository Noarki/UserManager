import { rest } from 'msw';
import { fakerRU as faker } from '@faker-js/faker';

export const OK = 200;

export const handlers = [
    rest.get('**/users', (_req, res, ctx) => {
        const getDepartment = () => {
            const department = faker.person.jobArea();

            return department.charAt(0).toUpperCase() + department.slice(1) + ' Отдел';
        };

        const users = new Array(50).fill('').map((_, id) => ({
            id: id + 1,
            name: faker.person.firstName() + ' ' + faker.person.lastName(),
            age: new Date().getFullYear() - new Date(faker.date.birthdate()).getFullYear(),
            email: faker.internet.email(),
            position: faker.person.jobTitle(),
            department: getDepartment(),
            compaty: faker.company.name(),
            zodiac: faker.person.zodiacSign(),
        }));

        return res(ctx.delay(2000), ctx.status(OK), ctx.json(users));
    }),
];
