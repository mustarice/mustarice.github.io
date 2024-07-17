function calculateAdminFee(amount) {
    // Convert amount to integer
    let nominal = parseInt(amount);

    // Calculate the admin fee based on the amount
    if (nominal > 370000) {
        // 0.5% for amounts above 370,000
        return Math.round(nominal * 0.005);
    } else {
        // 0.8% + Rp50 for amounts below 370,000
        return Math.round(nominal * 0.008 + 50);
    }
}
