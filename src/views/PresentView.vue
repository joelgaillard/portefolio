<template>
    <div class="present-container">
        <div class="section1-container">
            <h1 class="section1-element">
                Hello, je suis <span class="highlight">Joël Gaillard,</span> futur Ingénieur des médias
            </h1>
            <div class="section1-element photo"></div>
        </div>
        <div class="section2-container">
            <h2 class="section2-element">Qui suis-je ?</h2>
            <div class="section2-element texte">Jeune homme de 23 ans, j’ai commencé ma carrière professionnelle dans le
                graphisme et travaillé dans le domaine de l’imprimerie. Par la suite, j’ai repris mes études, où j’ai
                découvert une véritable passion pour le
                <span class="bold"> développement web</span>.
            </div>
            <div class="section2-element texte"> Je possède également des compétences en <span class="bold">UX, UI,
                    marketing, vente et gestion de projets.</span>
                <div class="button-container">
                    <Button class="main" text="Découvrir mes projets" @click="navigateTo('/projets')" />
                    <Button class="secondary" text="Consulter mon CV" link='/joel-gaillard-cv.pdf' />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from '../components/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateTo(path) {
    router.push(path);
}
</script>

<style scoped>
.present-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 10rem;
}

.section1-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4.125rem;
}

.section2-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.texte {
    padding-bottom: 1.5rem;
}

.photo {
    background-image: url(/portrait_joel.jpg);
    background-size: cover;
    background-position: center;
    width: 70%;
    aspect-ratio: 2/3;
}

.highlight {
    color: var(--primary-color);
    font-weight: bold;
}

.bold {
    font-weight: bold;
}

.button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 3rem;
    gap: 2rem;
}

@media (min-width: 992px) and (max-width: 1199px) {
    .texte {
        font-size: 1.25rem;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .texte {
        font-size: 1rem;
    }


}


@media screen and (max-width: 768px) {
    .present-container {
        gap: 3rem;
        text-align: center;
    }

    .section1-container {
        flex-direction: column;
        gap: 2rem;
    }

    .photo {
        width: 100%;
        aspect-ratio: 1/1;
    }

    .texte {
        font-size: 1rem;
    }

    .button-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    .button {
        width: 100%;
    }

}
</style>