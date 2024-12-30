'use client';

import React from 'react';

// Data untuk nama bulan dalam bahasa Indonesia
const bulanIndonesia = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const events = [
    {
        date: '2024-05-28',
        event: 'Pemberian Vitamin A',
        location: 'Posyandu Melati Jepang',
        time: '09:00 - 10:00',
    },
    {
        date: '2024-05-30',
        event: 'Sosialisasi MPASI',
        location: 'Posyandu Seroja Getas',
        time: '08:00 - 09:00',
    },
    {
        date: '2024-06-29',
        event: 'Pemeriksaan umum',
        location: 'Posyandu Melati Jepang',
        time: '08:00 - 10:00',
    },
];

const KalenderUser = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Agenda Kegiatan Posyandu</h2>
            <p style={styles.subHeader}>
                Lihat jadwal kegiatan Posyandu yang telah terdaftar.
            </p>

            {/* Event Cards */}
            <div style={styles.eventList}>
                {events.map((event, index) => (
                    <div key={index} style={styles.eventCard}>
                        {/* Date Section */}
                        <div style={styles.dateSection}>
                            <span style={styles.dateDay}>
                                {new Date(event.date).toLocaleDateString('id-ID', {
                                    day: '2-digit',
                                })}
                            </span>
                            <span style={styles.dateMonth}>
                                {
                                    bulanIndonesia[
                                        new Date(event.date).getMonth()
                                    ]
                                }
                            </span>
                        </div>

                        {/* Event Details */}
                        <div style={styles.detailsSection}>
                            <div style={styles.time}>{event.time}</div>
                            <h3 style={styles.eventTitle}>{event.event}</h3>
                            <p style={styles.location}>{event.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        width: '100%',
    },
    header: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    subHeader: {
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '20px',
    },
    eventList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    eventCard: {
        display: 'flex',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '15px',
        alignItems: 'center',
        gap: '15px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
    },
    dateSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafb',
        padding: '10px',
        borderRadius: '8px',
        width: '60px',
        height: '60px',
        textAlign: 'center',
    },
    dateDay: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#ef4444',
    },
    dateMonth: {
        fontSize: '12px',
        fontWeight: '600',
        color: '#6b7280',
        textTransform: 'capitalize',
    },
    detailsSection: {
        flex: 1,
    },
    time: {
        fontSize: '12px',
        color: '#6b7280',
        marginBottom: '5px',
    },
    eventTitle: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    location: {
        fontSize: '12px',
        color: '#6b7280',
    },
};

export default KalenderUser;
