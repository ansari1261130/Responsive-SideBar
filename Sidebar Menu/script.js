document.addEventListener('DOMContentLoaded', () => {
    const fullMenuItems = document.querySelectorAll('.main .dash, .main .over, .main .analy, .gene .pro, .gene .grp, .gene .rep, .acc .prof, .acc .set');
    const compactMenuItems = document.querySelectorAll('.smain .sdash, .smain .sover, .smain .sanaly, .sgene .spro, .sgene .sgrp, .sgene .srep, .sacc .sprof, .sacc .sset');
    const wrapper = document.querySelector('.wrapper');
    const container = document.querySelector('.container');

    const toggleFullMenuVisibility = () => {
        if (wrapper.style.display === "none" || wrapper.style.display === "") {
            wrapper.style.display = "block";
            container.style.display = "none";
        } else {
            wrapper.style.display = "none";
            container.style.display = "block";
        }
    };

    compactMenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation(); 
            toggleFullMenuVisibility();
        });
    });

    document.addEventListener('click', (e) => {
        if (wrapper.style.display === "block" && !wrapper.contains(e.target)) {
            wrapper.style.display = "none";
            container.style.display = "block";
        }
    });

    wrapper.style.display = "none";
    container.style.display = "block";
});
