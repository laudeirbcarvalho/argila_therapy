document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile Toggle - Inicialização imediata
    initMobileMenu();
    
    // Garantir que o menu mobile seja inicializado após o carregamento completo
    window.addEventListener('load', function() {
        initMobileMenu();
    });
    
    // Função para inicializar o menu mobile
    function initMobileMenu() {
        const menuMobile = document.querySelector('.menu-mobile');
        const menu = document.querySelector('.menu');
        
        console.log('Menu mobile:', menuMobile);
        console.log('Menu:', menu);
        
        if (menuMobile && menu) {
            // Garantir que o menu mobile seja clicável
            menuMobile.style.cursor = 'pointer';
            menuMobile.style.zIndex = '1001';
            
            menuMobile.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                menu.classList.toggle('active');
                console.log('Menu toggle clicked, active:', menu.classList.contains('active'));
                
                // Alternar ícone do menu
                const icon = menuMobile.querySelector('i');
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        
        // Fechar menu ao clicar em um link
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
                const icon = menuMobile.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Fechar menu ao clicar fora dele
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !menuMobile.contains(e.target) && menu.classList.contains('active')) {
                menu.classList.remove('active');
                const icon = menuMobile.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Inicializar o lazy loading de imagens
    initLazyLoading();
    
    // Modal de Pagamento
    const modal = document.getElementById('payment-modal');
    const paymentButtons = document.querySelectorAll('.payment-button');
    const closeModal = document.querySelector('.close-modal');
    const paymentCard = document.querySelector('.payment-card');
    const paymentPix = document.querySelector('.payment-pix');
    const copyPixButton = document.querySelector('.copy-pix-key');
    const pixKeyInput = document.querySelector('.pix-key input');
    
    // Abrir modal e mostrar método de pagamento correto
    if (paymentButtons.length > 0) {
        paymentButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Mostrar modal
                modal.classList.add('active');
                setTimeout(() => {
                    modal.querySelector('.modal-content').style.opacity = 1;
                    modal.querySelector('.modal-content').style.transform = 'translateY(0)';
                }, 10);
                
                // Mostrar método de pagamento correto
                const paymentMethod = this.getAttribute('data-payment');
                if (paymentMethod === 'card') {
                    paymentCard.classList.add('active');
                    paymentPix.classList.remove('active');
                } else if (paymentMethod === 'pix') {
                    paymentPix.classList.add('active');
                    paymentCard.classList.remove('active');
                }
                
                // Impedir scroll da página
                document.body.style.overflow = 'hidden';
            });
        });
    }
    
    // Fechar modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            closePaymentModal();
        });
        
        // Fechar modal ao clicar fora do conteúdo
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePaymentModal();
            }
        });
        
        // Fechar modal com tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closePaymentModal();
            }
        });
    }
    
    function closePaymentModal() {
        modal.querySelector('.modal-content').style.opacity = 0;
        modal.querySelector('.modal-content').style.transform = 'translateY(-50px)';
        
        setTimeout(() => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 300);
    }
    
    // Copiar chave Pix
    if (copyPixButton && pixKeyInput) {
        copyPixButton.addEventListener('click', function() {
            pixKeyInput.select();
            document.execCommand('copy');
            
            // Feedback visual
            const originalText = this.textContent;
            this.textContent = 'Copiado!';
            this.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 2000);
        });
    }
    
    // Processar formulário de pagamento com cartão
    const cardForm = document.getElementById('card-payment-form');
    
    if (cardForm) {
        cardForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de processamento de pagamento
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Processando...';
            
            setTimeout(() => {
                alert('Pagamento processado com sucesso! Você receberá um e-mail com os detalhes da sua compra.');
                submitButton.disabled = false;
                submitButton.textContent = originalText;
                closePaymentModal();
                cardForm.reset();
            }, 2000);
        });
    }
    
    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                
                // Restaurar ícone do menu
                const icon = menuMobile.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Header com efeito de scroll
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // Carrossel de Testemunhos
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.prev-testimonial');
    const nextButton = document.querySelector('.next-testimonial');
    let currentTestimonial = 0;
    
    // Esconder todos os testemunhos exceto o primeiro
    if (testimonials.length > 0) {
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });
        
        // Função para mostrar testemunho atual
        function showTestimonial(index) {
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'none';
            });
            testimonials[index].style.display = 'flex';
        }
        
        // Evento para botão anterior
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                currentTestimonial--;
                if (currentTestimonial < 0) {
                    currentTestimonial = testimonials.length - 1;
                }
                showTestimonial(currentTestimonial);
            });
        }
        
        // Evento para botão próximo
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                currentTestimonial++;
                if (currentTestimonial >= testimonials.length) {
                    currentTestimonial = 0;
                }
                showTestimonial(currentTestimonial);
            });
        }
        
        // Rotação automática do carrossel
        setInterval(function() {
            currentTestimonial++;
            if (currentTestimonial >= testimonials.length) {
                currentTestimonial = 0;
            }
            showTestimonial(currentTestimonial);
        }, 5000); // Muda a cada 5 segundos
    }
    
    // Animação de scroll suave para links de ancoragem
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignorar links com apenas #
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcular a posição de destino com um pequeno offset para o header fixo
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de entrada para elementos quando visíveis no viewport
    const animateElements = document.querySelectorAll('.benefit-card, .special-item, .step, .testimonial-card');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150; // Ajuste conforme necessário
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    // Adicionar classe 'visible' aos elementos já visíveis no carregamento
    window.addEventListener('load', checkIfInView);
    
    // Verificar elementos ao rolar a página
    window.addEventListener('scroll', checkIfInView);
    
    // Configuração dos botões de WhatsApp
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Verificar se o link já está configurado
            if (!this.href || this.href === '#') {
                e.preventDefault();
                
                // Número de WhatsApp e mensagem padrão (substituir pelo número real)
                const phoneNumber = '5511XXXXXXXXX';
                let message = 'Olá! Gostaria de saber mais sobre a Argila Branca Adlux';
                
                // Se for o botão de compra, personalizar a mensagem
                if (this.textContent.includes('Comprar')) {
                    message = 'Olá! Gostaria de comprar a Argila Branca Adlux';
                }
                
                // Criar URL do WhatsApp
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                
                // Abrir em nova aba
                window.open(whatsappUrl, '_blank');
            }
        });
    });
});

// Função para inicializar o lazy loading de imagens
function initLazyLoading() {
    // Verificar se o navegador suporta IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        // Fallback para navegadores que não suportam IntersectionObserver
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.classList.add('loaded');
        });
        return;
    }
    
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    }, { threshold: 0.1, rootMargin: '50px' });
    
    images.forEach(image => {
        // Garantir que todas as imagens sejam visíveis
        image.style.opacity = '1';
        imageObserver.observe(image);
    });
    
    // Otimizar o carregamento de recursos
    if ('connection' in navigator && navigator.connection.saveData) {
        // Modo de economia de dados ativado
        document.body.classList.add('save-data');
    }
}

// Adicionar classe CSS para animações
document.head.insertAdjacentHTML('beforeend', `
<style>
    .benefit-card, .special-item, .step, .testimonial-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .benefit-card.visible, .special-item.visible, .step.visible, .testimonial-card.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .benefit-card:nth-child(1) { transition-delay: 0.1s; }
    .benefit-card:nth-child(2) { transition-delay: 0.2s; }
    .benefit-card:nth-child(3) { transition-delay: 0.3s; }
    .benefit-card:nth-child(4) { transition-delay: 0.4s; }
    .benefit-card:nth-child(5) { transition-delay: 0.5s; }
    
    .step:nth-child(1) { transition-delay: 0.1s; }
    .step:nth-child(2) { transition-delay: 0.2s; }
    .step:nth-child(3) { transition-delay: 0.3s; }
    .step:nth-child(4) { transition-delay: 0.4s; }
    
    img {
        transition: opacity 0.3s ease-in-out;
    }
    
    img.loaded {
        opacity: 1;
    }
    
    .save-data img:not([src*="logo"]):not([src*="hero"]) {
        filter: blur(0px);
        transform: scale(0.9);
    }
</style>
`);}]}