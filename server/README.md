## Evironment variables

.env file in the root directory

```bash
PORT=8000
MONGODB_URI=mongodb://127.0.0.1:27017
DB_NAME=eBooks
DB_USER=
DB_PASS=
CLIENT_DOMAIN=localhost
CLIENT_URL= http://localhost:3000
COOKIE_AGE=3600
# for cloudinary
CLOUD_NAME = dy9g317c9
API_KEY = 864288557149947
API_SECRET = O4P_LyMhSX9YIijd6akL-vgu1Ts
#for email sender
EMAIL_SENDER =tranvanhau108201@gmail.com
EMAIL_PASSWORD =georpdyizlsvqtpm
#jwt token config
JWT_SECRET_KEY =secretkey
JWT_REFRESH_KEY =refreshkey
JWT_EXPIRE_TIME =1h
#for paypal
PAYPAL_CLIENT_ID=AUltZkePSM4O0HoRe_99x0JSnU4ymGhkgDjrUdSNBBuDEaygNOgfm8fNqizjQ9baZWtoEgLtI1K0PrUS
PAYPAL_SECRET_ID=EG99Oh0Xb0vL11-Wd7tc3aZpGXTvWCNJ7jz_1uIl_tfaPLbI2lufs42yIugsWLQzRj2sMfvdRfwGZ3VR
```

## Run command

```bash
yarn install
#then
yarn start
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

## Docker

using docker instead

```
docker pull tranhau1821/kngofwrd:ebook_api
```

Docker Image [here](https://hub.docker.com/layers/tranhau1821/eb00k/ebook_api/images/sha256-830bae3105accd1c3c9c539e2a1e3a248d86186f579cd72a8f8e53e90733c061?context=repo)
