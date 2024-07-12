# Hype AI Sanity Check

This is just a toy website with a few questions, to check how hyped you are about AI ... have fun!

![The Techno Prophet](https://github.com/rdenadai/hype_ai_sanity_check/blob/main/public/assets/profile/024da774-b865-4038-8eeb-719cab379eff.png?raw=true)

## Project Setup

This project is built using Bun, Vue.js and Tailwind CSS.

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Production Build

This will try to build the project and run it in a Docker container. Please take into account, that if you don't have a certificate for your domain, you will need to change the nginx configuration in the `docker-compose.yml` file to create the certificate first and then enable the HTTPS configuration.

```sh
bun run build && docker-compose down && docker-compose up
```
