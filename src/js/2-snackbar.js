import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const delay = Number(e.target.delay.value.trim());
    const state = form.elements.state.value;

    createPromise(delay, state)
        .then((delay) => {
            iziToast.success({
                title: "✅ Fulfilled",
                message: `Promise in ${delay}ms`,
                position: "topRight",
                timeout: 3000,
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: "❌ Rejected",
                message: `Promise in ${delay}ms`,
                position: "topRight",
                timeout: 3000,
            });
        });
    form.reset();
});

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}