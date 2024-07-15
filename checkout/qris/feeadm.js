function calculateAdminFee(amount) {
    const percentageFee = 0.0085; // 0.85%
    const fixedFee = 150; // Rp 150

    const fee = (amount * percentageFee) + fixedFee;
    return fee;
}
