function calculateAdminFee(amount) {
    // Convert amount to integer
    let nominal = parseInt(amount);

    // Calculate the admin fee based on the amount
    if (nominal > 250000) {
        // 0.28% for amounts above 250,000
        return Math.round(nominal * 0.0025);
    } else {
        // 0.4% for amounts below 250,000
        return Math.round(nominal * 0.0055);
    }
}
