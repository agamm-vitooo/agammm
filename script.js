    // Fungsi untuk menampilkan atau menyembunyikan navigasi mobile saat tombol hamburger diklik
    document.getElementById("mobile-menu-button").addEventListener("click", function() {
        document.getElementById("mobile-menu").classList.toggle("hidden");
    });

    const openModalButton = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('closeModal');

    openModalButton.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    const text = document.querySelector(".typing");
    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "UI/UX Designer";
        }, 0);
        setTimeout(() => {
            text.textContent = "Frontend Developer";
        }, 1000);
    }
    textLoad();
    setInterval(textLoad, 2000);

    const boxes = document.querySelectorAll('.box');

    const config = {
        threshold: 0.5
    };

    const tl = new TimelineMax();

    let observer = new IntersectionObserver(function(entries, self) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let overlap = '-=0.3';

                if (!tl.isActive()) {
                    overlap = '+=0';
                }

                tl.to(entry.target, 0.5, { autoAlpha: 1 }, overlap);
                self.unobserve(entry.target);
            }
        });
    }, config);

    boxes.forEach(box => {
        observer.observe(box);
    });

    gsap.fromTo('.hero-image', { x: '30rem', opacity: 0 }, { x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 2.3 });