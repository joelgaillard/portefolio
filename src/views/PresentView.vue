<template>
    <div class="present-container">
        <div class="section1-container">
            <h1 class="section1-element">
                Hello, je suis <span class="highlight">Joël Gaillard,</span> Ingénieur des médias
            </h1>
            <div class="section1-element photo"></div>
        </div>
        <div class="section2-container">
            <h2 class="section2-element">Qui suis-je ?</h2>
            <div class="section2-element texte">Jeune homme de 23 ans ayant débuté professionnellement dans graphisme et
                ayant travaillé dans le monde de l’imprimerie, j’ai repris mes études où je me suis passionné pour le
                <span class="highlight"> développement web</span>.
            </div>
            <div class="section2-element texte"> Je dispose également de compétence en <span class="highlight">UX, UI,
                    marketing, vente et gestion de projets.</span>
                <div class="button-container">
                    <MainButton class="button" text="Découvrir mes projets" @click="navigateTo('/projets')" />
                    <SecondaryButton class="button" text="Consulter mon CV" link='/public/joel-gaillard-cv.pdf' />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MainButton from '../components/MainButton.vue';
import SecondaryButton from '../components/SecondaryButton.vue';
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

.section1-element {
    color: var(--text-color);
    text-decoration: none;
}

.section2-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.texte {
    font-size: 1.5rem;
    padding-bottom: 1.5rem;
}

.photo {
    background-image: url(../../public/portrait_joel.jpg);
    background-size: cover;
    background-position: center;
    width: 70%;
    aspect-ratio: 2/3;
}

.highlight {
    color: green;
    font-weight: bold;
}

.button-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: 5rem;
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