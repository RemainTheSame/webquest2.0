function melee_vs_melee(attWepSkill, attDex, defWepSkill, defDex){
    let attCp = attWepSkill + attDex;
    let defCp = defWepSkill + defDex;
    let cpDiff = (attCp - defCp);
    let deltaHit = cpDiff/2.5;
    return 50+deltaHit;
}

function melee_vs_ranged(attWepSkill, attDex, defWepSkill, defDex) {
    let attCp = attWepSkill + attDex;
    let defCp = 0.65*defWepSkill + defDex;
    let cpDiff = (attCp - defCp);
    let deltaHit = cpDiff/2.5;
    return 50+deltaHit;
}

function ranged_vs_melee(attWepSkill, attPer, defWepSkill, defDex) {
    let attCp = attWepSkill + attPer;
    let defCp = 0.25*defWepSkill + defDex;
    let cpDiff = (attCp - defCp);
    let deltaHit = cpDiff/2.5;
    return 50+deltaHit;
}

function ranged_vs_ranged(attWepSkill, attPer, defDex) {
    let attCp = attWepSkill + attPer;
    let defCp = 2*defDex;
    let cpDiff = (attCp - defCp);
    let deltaHit = cpDiff/2.5;
    return 50+deltaHit;
}