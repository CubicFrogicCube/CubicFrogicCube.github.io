let Player = {
    Money: 0.00,
    Time: 0.00,
    ConstantTerm: 1,
    ConstCost: 10,
    LinearTerm: 0,
    LinCost: 1000,
    QuadraticTerm: 0,
    QuadCost: 1e7,
    CubicTerm: 0,
    CubCost: 1e15,
    QuarticTerm: 0,
    QuarCost: 1e35,
    QuinticTerm: 0,
    QuinCost: 1e75,
    HighestTerm: 0,
    CoefficientSum: 1,
    CoSumUnlocked: false,
    ConstBuying: false,
    LinBuying: false,
    QuadBuying: false,
    CubBuying: false,
    QuarBuying: false,
    QuinBuying: false,
}

function GSN(Argument) { //GSN is Get Scientific Notation
    if(Argument>=1e3) {
        let Exponent = Math.floor(Math.log10(Argument))
        let Mantissa = Argument/10**Exponent
        return Mantissa.toFixed(2) + "e" + Exponent
    }
    else {
        return Argument.toFixed(2)
    }
}

function Polynomial() {
    let p = Player
    p.Time++
    p.Money += ((p.Time**5*p.QuinticTerm)+(p.Time**4*p.QuarticTerm)+(p.Time**3*p.CubicTerm)+(p.Time**2*p.QuadraticTerm)+(p.Time*p.LinearTerm)+p.ConstantTerm)*p.CoefficientSum
}
setInterval(Polynomial,1000)

function GameLoop() {
    let p = Player
    let d = document
    d.getElementById("TimeAndMoney").innerHTML = "Time: " + GSN(p.Time) + " Money: " + GSN(p.Money)
    if(p.HighestTerm === 0) {
        d.getElementById("Polynomial").innerHTML = "Money Increase = (" + p.ConstantTerm + ")"
    }
    if(p.HighestTerm === 1) {
        d.getElementById("Polynomial").innerHTML = "Money Increase = (" + p.LinearTerm + "t + " + p.ConstantTerm + ")"
    }
    if(p.HighestTerm === 2) {
        d.getElementById("Polynomial").innerHTML = "Money Increase = (" + p.QuadraticTerm + "t<sup>2</sup> + " + p.LinearTerm + "t + " + p.ConstantTerm + ")"
    }
    if(p.HighestTerm === 3) {
        d.getElementById("Polynomial").innerHTML = "Money Increase = (" + p.CubicTerm + "t<sup>3</sup> + " + p.QuadraticTerm + "t<sup>2</sup> + " + p.LinearTerm + "t + " + p.ConstantTerm + ")"
    }
    if(p.HighestTerm === 4) {
        d.getElementById("Polynomial").innerHTML = "Money Increase = (" + p.QuarticTerm + "t<sup>4</sup> + " + p.CubicTerm + "t<sup>3</sup> + " + p.QuadraticTerm + "t<sup>2</sup> + " + p.LinearTerm + "t + " + p.ConstantTerm + ")"
    }
    if(p.HighestTerm === 5) {
        d.getElementById("Polynomial").innerHTML = "Money Increase = (" + p.QuinticTerm + "t<sup>5</sup> + " + p.QuarticTerm + "t<sup>4</sup> + " + p.CubicTerm + "t<sup>3</sup> + " + p.QuadraticTerm + "t<sup>2</sup> + " + p.LinearTerm + "t + " + p.ConstantTerm  + ")"
    }
    d.getElementById("ConstantTerm").innerHTML = "Increase the Constant Term, <br> Cost: " + GSN(p.ConstCost)
    d.getElementById("LinearTerm").innerHTML = "Increase the Linear Term, <br> Cost: " + GSN(p.LinCost)
    d.getElementById("QuadraticTerm").innerHTML = "Increase the Quadratic Term, <br> Cost: " + GSN(p.QuadCost)
    d.getElementById("CubicTerm").innerHTML = "Increase the Cubic Term, <br> Cost: " + GSN(p.CubCost)
    d.getElementById("QuarticTerm").innerHTML = "Increase the Quartic Term, <br> Cost: " + GSN(p.QuarCost)
    d.getElementById("QuinticTerm").innerHTML = "Increase the Quintic Term, <br> Cost: " + GSN(p.QuinCost)
    if(p.Time>=300) {
    d.getElementById("Approximation").style.visibility = "visible"
    }
    d.getElementById("Approximation").innerHTML = "&cong; " + GSN(((p.Time**5*p.QuinticTerm)+(p.Time**4*p.QuarticTerm)+(p.Time**3*p.CubicTerm)+(p.Time**2*p.QuadraticTerm)+(p.Time*p.LinearTerm)+p.ConstantTerm)*p.CoefficientSum) 
    if(p.CoSumUnlocked) {
        p.CoefficientSum = p.QuinticTerm+p.QuarticTerm+p.CubicTerm+p.QuadraticTerm+p.LinearTerm+p.ConstantTerm
        d.getElementById("CoefficientSumMult").style.visibility = "visible"
        d.getElementById("CoefficientSumMult").innerHTML = "<sub>x" + GSN(p.CoefficientSum) + "</sub>"
    }
    if(d.getElementById("ConstBox").checked) {
        p.ConstBuying = true
    }
    else {
        p.ConstBuying = false
    }
    if(d.getElementById("LinBox").checked) {
        p.LinBuying = true
    }
    else {
        p.LinBuying = false
    }
    if(d.getElementById("QuadBox").checked) {
        p.QuadBuying = true
    }
    else {
        p.QuadBuying = false
    }
    if(d.getElementById("CubBox").checked) {
        p.CubBuying = true
    }
    else {
        p.CubBuying = false
    }
    if(d.getElementById("QuarBox").checked) {
        p.QuarBuying = true
    }
    else {
        p.QuarBuying = false
    }
    if(d.getElementById("QuinBox").checked) {
        p.QuinBuying = true
    }
    else {
        p.QuinBuying = false
    }
    if(Player.Time>=200) {
        document.getElementById("Autobuyers").style.visibility = "visible"
        document.getElementById("ConstBuyer").style.visibility = "visible"
    }
    if(Player.Time>=400) {
        document.getElementById("LinBuyer").style.visibility = "visible"        
    }
    if(Player.Time>=900) {
        document.getElementById("QuadBuyer").style.visibility = "visible"
    }
    if(Player.Time>=1600) {
        document.getElementById("CubBuyer").style.visibility = "visible"
    }
    if(Player.Time>=10000) {
        document.getElementById("QuarBuyer").style.visibility = "visible"       
    }
    if(Player.Time>=100000) {
        document.getElementById("QuinBuyer").style.visibility = "visible"
    }
}
setInterval(GameLoop,33)

function BuyConstant() {
    if(Player.Money >= Player.ConstCost) {
        Player.Money -= Player.ConstCost
        Player.ConstantTerm++
        Player.ConstCost *= 1.02
    }
}
document.getElementById("ConstantTerm").addEventListener("click",BuyConstant)
function BuyLinear() {
    if(Player.Money >= Player.LinCost) {
        if(Player.LinearTerm === 0) {
            Player.HighestTerm++
        }
        Player.Money -= Player.LinCost
        Player.LinearTerm++
        Player.LinCost *= 1.02
    }
}
document.getElementById("LinearTerm").addEventListener("click",BuyLinear)
function BuyQuadratic() {
    if(Player.Money >= Player.QuadCost) {
        if(Player.QuadraticTerm === 0) {
            Player.HighestTerm++
        }
        Player.Money -= Player.QuadCost
        Player.QuadraticTerm++
        Player.QuadCost *= 1.02
    }
}
document.getElementById("QuadraticTerm").addEventListener("click",BuyQuadratic)
function BuyCubic() {
    if(Player.Money >= Player.CubCost) {
        if(Player.CubicTerm === 0) {
            Player.HighestTerm++
        }
        Player.Money -= Player.CubCost
        Player.CubicTerm++
        Player.CubCost *= 1.02
    }
}
document.getElementById("CubicTerm").addEventListener("click",BuyCubic)
function BuyQuartic() {
    if(Player.Money >= Player.QuarCost) {
        if(Player.QuarticTerm === 0) {
            Player.HighestTerm++
        }
        Player.Money -= Player.QuarCost
        Player.QuarticTerm++
        Player.QuarCost *= 1.02
    }
}
document.getElementById("QuarticTerm").addEventListener("click",BuyQuartic)
function BuyQuintic() {
    if(Player.Money >= Player.QuinCost) {
        if(Player.QuinticTerm === 0) {
            Player.HighestTerm++
        }
        Player.Money -= Player.QuinCost
        Player.QuinticTerm++
        Player.QuinCost *= 1.02
    }
}
document.getElementById("QuinticTerm").addEventListener("click",BuyQuintic)

document.getElementById("CoefficientSumUpg").onclick = function() {
    if(Player.Money>=1e9 && Player.CoSumUnlocked == false) {
        Player.Money -= 1e9
        Player.CoSumUnlocked = true
        document.getElementById("CoefficientSumUpg").style.backgroundColor = "green"
    }
}

function ABLoop() {
    if(Player.ConstBuying) {
        BuyConstant()
    }
    if(Player.LinBuying) {
        BuyLinear()
    }
    if(Player.QuadBuying) {
        BuyQuadratic()
    }
    if(Player.CubBuying) {
        BuyCubic()
    }
    if(Player.QuarBuying) {
        BuyQuartic()
    }
    if(Player.QuinBuying) {
        BuyQuintic()
    }
}
setInterval(ABLoop, 33)

