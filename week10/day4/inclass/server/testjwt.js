import jwt from 'jsonwebtoken';


const token = jwt.sign(
    //data
    {name: 'John', email: 'jj@gmail.com', userid:234},
    '@3$4@45332',
    {
        expiresIn:'60s'
    }
);

// const token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiampAZ21haWwuY29tIiwidXNlcmlkIjoyMzQsImlhdCI6MTY3OTQ3MjU1MiwiZXhwIjoxNjc5NDcyNjEyfQ.FzamPayECRmBsPV094tEcZ5CSs9CrpmTxv6_jD0k0Wk

jwt.verify(token, '@3$4@45332', (err,decoded)=> {
    if(err) return console.log(err);
    console.log(decoded)
})