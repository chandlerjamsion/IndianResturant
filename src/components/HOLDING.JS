<Row className="form-group">
    <Label htmlFor="message" md={12}>Comment</Label>
    <Col md={12}>
        <Control.textarea model=".message" id="message" name="message"
            rows="6"
            className="form-control" />
    </Col>
</Row>

    <Row className="form-group">
        <Col md={{ size: 10, offset: 2 }}>
            <Button type="submit" color="primary">
                Send Comment
                                        </Button>
        </Col>
    </Row>