describe('Projection', function() {
    var MM = com.modestmaps,
        m;

    beforeEach(function() {
        m = new MM.MercatorProjection(10);
    });

    it('can instantiate a mercator projection', function() {
        // TODO: row is a very small number because of odd javascript math.
        expect(m.locationCoordinate(new MM.Location(0, 0)).column).toEqual(0);
        expect(m.locationCoordinate(new MM.Location(0, 0)).zoom).toEqual(10);
        expect(m.coordinateLocation(new MM.Coordinate(0, 0, 10))).toEqual({
          lon: 0,
          lat: 0
        });
    });

    it('is accurate up to 3 decimals', function() {
        // Confirm that these values are valid up to a 3 decimals
        var c2 = m.locationCoordinate(new MM.Location(37, -122));
        expect(Math.round(c2.row * 1000) / 1000).toEqual(0.696);
        expect(Math.round(c2.column * 1000) / 1000).toEqual(-2.129);
        expect(c2.zoom).toEqual(10);
    });

    it('coordinatelocation to work', function() {
        var l2 = m.coordinateLocation(new MM.Coordinate(0.696, -2.129, 10));
        expect(Math.round(l2.lat * 1000) / 1000).toEqual(37.001);
        expect(Math.round(l2.lon * 1000) / 1000).toEqual(-121.983);
    });
});
