export function get_name(){
    var name ="SAIDINO"
    console.log('from utils')
    return "Saidino"
}

export const cnv =document.getElementById( "cnv")
export const ctx =cnv.getContext( "2d")
export const _debug =document.getElementById( 'res2')
export const scoreText =document.getElementById( 'res')
export const resetbtn =document.getElementById( 'r-btn')
export const game_board = document.getElementById('snakeboard')

console.log('bg removed')
cnv.style.display="None"
// cnv.style.background='red'
// document.body.removeChild(cnv)