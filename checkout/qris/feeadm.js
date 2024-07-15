function calculateAdminFee(amount) {
    // Convert amount to integer
    let nominal = parseInt(amount);

    // Check if nominal is above 450,000
    if (nominal > 450000) {
        return 0; // No admin fee
    }

    // Calculate the admin fee
    let feePercentage = 0.0085; // 0.85%
    let fixedFee = 150; // Rp150
    let adminFee = (nominal * feePercentage) + fixedFee;

    return Math.round(adminFee);
}
