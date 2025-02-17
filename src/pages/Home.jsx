import { Box, Button, Container, Grid, Paper, Rating, Typography, useTheme } from '@mui/material';
import { ArrowForward, LocalShipping, Shield, Star, Verified } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Ceylon Cinnamon',
      price: 11.99,
      image: '/images/hero/cinnamon.jpg',
      rating: 4.8,
      description: 'Finest quality Ceylon cinnamon for your wellness'
    },
    {
      id: 2,
      name: 'Organic Turmeric Powder',
      price: 9.99,
      image: '/images/hero/tumeric.jpg',
      rating: 4.9,
      description: 'Pure and natural turmeric powder'
    },
    {
      id: 3,
      name: 'Pure Raw Honey',
      price: 15.99,
      image: '/images/hero/honey.jpg',
      rating: 4.7,
      description: '100% natural raw honey'
    },
    {
      id: 4,
      name: 'Premium Red Chilli',
      price: 7.99,
      image: '/images/hero/red-chillie.jpg',
      rating: 4.6,
      description: 'Premium quality red chilli'
    },
  ];

  const categories = [
    {
      name: 'Herbal Teas',
      image: '/images/categories/teas.jpg',
      description: 'Organic and calming tea blends',
    },
    {
      name: 'Essential Oils',
      image: '/images/categories/oils.jpg',
      description: 'Pure and natural aromatherapy',
    },
    {
      name: 'Natural Remedies',
      image: '/images/categories/remedies.jpg',
      description: 'Traditional healing solutions',
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing quality products! The chamomile tea helps me sleep better.',
      image: '/images/reviews/user1.jpg',
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      comment: "Best essential oils I've ever used. Will definitely buy again!",
      image: '/images/reviews/user2.jpg',
    },
    {
      id: 3,
      name: 'Emma Davis',
      rating: 5,
      comment: 'The wellness pack has improved my daily routine significantly.',
      image: '/images/reviews/user3.jpg',
    },
  ];

  const slides = [
    {
      image: '/images/hero/cinnamon.jpg',
      title: 'Premium Cinnamon',
      description: 'Finest quality Ceylon cinnamon for your wellness'
    },
    {
      image: '/images/hero/tumeric.jpg',
      title: 'Organic Turmeric',
      description: 'Pure and natural turmeric powder'
    },
    {
      image: '/images/hero/honey.jpg',
      title: 'Pure Honey',
      description: '100% natural raw honey'
    },
    {
      image: '/images/hero/red-chillie.jpg',
      title: 'Red Chilli',
      description: 'Premium quality red chilli'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <Box>
      {/* Hero Section with Slideshow */}
      <Box 
        sx={{
          background: `linear-gradient(45deg, ${theme.palette.primary.light}15, ${theme.palette.secondary.light}15)`,
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  component="span"
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    display: 'inline-block',
                    mb: 3,
                    fontSize: '0.875rem'
                  }}
                >
                  100% Organic & Natural
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 2,
                    lineHeight: 1.2
                  }}
                >
                  Discover Natural
                  <Box 
                    component="span"
                    sx={{ 
                      color: 'primary.main',
                      display: 'block'
                    }}
                  >
                    Wellness
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    fontWeight: 'normal'
                  }}
                >
                  Experience nature's finest remedies with our premium collection
                  of organic herbs and essential oils.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 6 }}>
                  <Button
                    component={Link}
                    to="/shop"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                  >
                    Explore Collection
                  </Button>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    size="large"
                  >
                    Learn More
                  </Button>
                </Box>
                <Grid container spacing={3}>
                  {[
                    { number: '500+', label: 'Natural Products' },
                    { number: '10000+', label: 'Happy Customers' },
                    { number: '100%', label: 'Organic' }
                  ].map((stat, index) => (
                    <Grid item xs={4} key={index}>
                      <Typography variant="h4" fontWeight="bold" color="primary">
                        {stat.number}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

            {/* Slideshow */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  height: '500px',
                  boxShadow: theme.shadows[10],
                }}
              >
                {/* Slides */}
                <Box
                  sx={{
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                  }}
                >
                  {slides.map((slide, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: currentSlide === index ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                      }}
                    >
                      <Box
                        component="img"
                        src={slide.image}
                        alt={slide.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease-in-out',
                          transform: currentSlide === index ? 'scale(1.05)' : 'scale(1)',
                        }}
                      />
                      {/* Slide Content */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                          color: 'white',
                          p: 4,
                          transform: `translateY(${currentSlide === index ? '0' : '20px'})`,
                          opacity: currentSlide === index ? 1 : 0,
                          transition: 'all 0.5s ease-in-out',
                        }}
                      >
                        <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
                          {slide.title}
                        </Typography>
                        <Typography variant="subtitle1">
                          {slide.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Navigation Dots */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    display: 'flex',
                    gap: 1,
                    zIndex: 2,
                  }}
                >
                  {slides.map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        bgcolor: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.2)',
                          bgcolor: 'white',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Products */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ 
            mb: 6, 
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 600,
            color: 'gray.800'
          }}
        >
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Paper
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                    '& .product-image': {
                      transform: 'scale(1.1)',
                    }
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    paddingTop: '100%', // 1:1 Aspect ratio
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                </Box>
                <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      mb: 1
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ mb: 2, flexGrow: 1 }}
                  >
                    {product.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating 
                      value={product.rating} 
                      readOnly 
                      precision={0.1} 
                      size="small"
                    />
                    <Typography 
                      variant="body2" 
                      sx={{ ml: 1, color: 'text.secondary' }}
                    >
                      ({product.rating})
                    </Typography>
                  </Box>
                  <Typography 
                    variant="h6" 
                    color="primary.main" 
                    sx={{ 
                      mb: 2,
                      fontWeight: 600,
                      fontSize: '1.25rem'
                    }}
                  >
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Button 
                    variant="contained" 
                    fullWidth
                    sx={{
                      mt: 'auto',
                      textTransform: 'none',
                      py: 1.5,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: theme.shadows[4]
                      }
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { icon: <Verified />, title: '100% Organic', desc: 'Certified organic products' },
              { icon: <LocalShipping />, title: 'Fast Delivery', desc: 'Free shipping over $50' },
              { icon: <Star />, title: 'Premium Quality', desc: 'Highest quality standards' },
              { icon: <Shield />, title: 'Secure Shopping', desc: '100% secure checkout' }
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows[4]
                    }
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      '& .MuiSvgIcon-root': { fontSize: 40 }
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
