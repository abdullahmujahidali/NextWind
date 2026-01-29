import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Abdullah Mujahid - Engineering Leader & AI Architect'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #09090B 0%, #18181B 50%, #09090B 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Gradient accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 80px',
          }}
        >
          {/* Avatar placeholder */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '60px',
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              color: 'white',
              fontWeight: 'bold',
              marginBottom: '24px',
            }}
          >
            AM
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            Abdullah Mujahid
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '28px',
              background: 'linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '32px',
              textAlign: 'center',
            }}
          >
            Engineering Leader & AI Architect
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '48px',
              marginTop: '16px',
            }}
          >
            {[
              { value: '8+', label: 'Years' },
              { value: '100K+', label: 'Users' },
              { value: '389+', label: 'Citations' },
              { value: '15+', label: 'Projects' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#6366F1',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    color: '#71717A',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Website URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '18px',
            color: '#71717A',
          }}
        >
          abdullahmujahid.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
