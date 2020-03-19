const homeController ={
    index: (req, res) =>{
        let servicos = [
            {nome: "Desenvolvimento web", imagem: "/imagens/undraw_dev_focus.svg"},
            {nome: "Marketing digital", imagem: "/imagens/undraw_social_dashboard.svg"},
            {nome: "Consultoria UX", imagem: "imagens/undraw_mobile_apps.svg"},
        ];
        let banners = [
            {imagem: "/imagens/banner.jpg"},
            {imagem: "/imagens/banner2.jpg"},
            {imagem: "/imagens/banner3.jpg"},
            {imagem: "/imagens/banner1.jpg"}
        ];
        res.render('index', {title: 'Home', listaServicos: servicos, listaBanners: banners})
    }
};

module.exports = homeController;