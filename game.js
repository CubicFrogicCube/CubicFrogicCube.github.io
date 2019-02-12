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
    CubCost: 1e20,
    QuarticTerm: 0,
    QuarCost: 1e35,
    QuinticTerm: 0,
    QuinCost: 1e60,
    HighestTerm: 0,
    CoefficientSum: 1,
    CoSumUnlocked: false,
}

function GSN(Number) { //GSN is Get Scientific Notation
    if(Number>=1e3) {
        let Exponent = Math.floor(Math.log10(Number))
        let Mantissa = Number/10**Exponent
        return Mantissa.toFixed(2) + "e" + Exponent
    }
    else {
        return Number.toFixed(2)
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
    d.getElementById("Approximation").innerHTML = "&cong; " + GSN(((p.Time**5*p.QuinticTerm)+(p.Time**4*p.QuarticTerm)+(p.Time**3*p.CubicTerm)+(p.Time**2*p.QuadraticTerm)+(p.Time*p.LinearTerm)+p.ConstantTerm))*p.CoefficientSum
    if(p.CoSumUnlocked) {
        p.CoefficientSum = p.QuinticTerm+p.QuarticTerm+p.CubicTerm+p.QuadraticTerm+p.LinearTerm+p.ConstantTerm
        d.getElementById("CoefficientSumMult").style.visibility = "visible"
        d.getElementById("CoefficientSumMult").innerHTML = "x" + GSN(p.CoefficientSum)
    }
}
setInterval(GameLoop,33)

document.getElementById("ConstantTerm").onclick = function() {
    if(Player.Money >= Player.ConstCost) {
        Player.Money -= Player.ConstCost
        Player.ConstantTerm++
        Player.ConstCost *= 1.02
    }
}
document.getElementById("LinearTerm").onclick = function() {
    if(Player.Money >= Player.LinCost) {
        if(Player.LinearTerm === 0) {
            Player.HighestTerm++
        }
        Player.Money -= Player.LinCost
        Player.LinearTerm++
        Player.LinCost *= 1.02
    }
}
document.getElementById("QuadraticTerm").onclick = function() {
    if(Player.Money >= Player.QuadCost) {
        if(Player.QuadraticTerm === 0) {
            Player.HighestTerm++
        }
        Player.Money -= Player.QuadCost
        Player.QuadraticTerm++
        Player.QuadCost *= 1.02
    }
}
document.getElementById("CubicTerm").onclick = function() {
    if(Player.Money >= Player.CubCost) {
        if(Player.CubicTerm === 0) {
            Player.HighestTerm++
        }
        Player.Money -= Player.CubCost
        Player.CubicTerm++
        Player.CubCost *= 1.02
    }
}
document.getElementById("QuarticTerm").onclick = function() {
    if(Player.Money >= Player.QuarCost) {
        if(Player.QuadraticTerm === 0) {
            Player.HighestTerm++
        }
        Player.Money -= Player.QuarCost
        Player.QuarticTerm++
        Player.QuarCost *= 1.02
    }
}
document.getElementById("QuinticTerm").onclick = function() {
    if(Player.Money >= Player.QuinCost) {
        if(Player.QuinticTerm === 0) {
            Player.HighestTerm++
        }
        Player.Money -= Player.QuinCost
        Player.QuinticTerm++
        Player.QuinCost *= 1.02
    }
}

document.getElementById("CoefficientSumUpg").onclick = function() {
    if(Player.Money>=1e9) {
        Player.Money -= 1e9
        Player.CoSumUnlocked = true
    }
}