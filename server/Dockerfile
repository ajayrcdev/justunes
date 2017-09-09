FROM node:boron

RUN mkdir -p app
WORKDIR app

COPY package.json package.json
RUN npm install --production

COPY dist dist
ENV NODE_ENV ${NODE_ENV:-production}

RUN mkdir uploads
RUN chown -R node uploads

USER node

CMD [ "npm", "start" ]

# docker run -itd --name backend backend
