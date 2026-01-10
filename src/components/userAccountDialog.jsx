const UserDialog = ({ open, onClose, user }) => {
    if (!open || !user) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60"
                onClick={onClose}
            />

            {/* Dialog */}
            <div className="relative bg-white rounded-lg shadow-xl w-96 p-5 z-50">
                <h2 className="text-lg font-semibold mb-4">User Details</h2>

                <div className="space-y-2 text-sm">
                    <p><span className="font-medium text-black">Deposit:</span> {user.walletDeposit}</p>
                    <p><span className="font-medium text-black">Self Earning:</span> {user.walletSelfEarn}</p>
                    <p><span className="font-medium text-black">Team Earning:</span> {user.walletTeamEarn}</p>
                    <p><span className="font-medium text-black">Balance:</span> {user.walletEarning}</p>
                    <p><span className="font-medium text-black">Total Earning:</span> {user.totalEarning}</p>
                </div>

                <div className="mt-5 text-right">
                    <button
                        onClick={onClose}
                        className="px-4 py-1.5 bg-gray-800 text-white rounded hover:bg-gray-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserDialog